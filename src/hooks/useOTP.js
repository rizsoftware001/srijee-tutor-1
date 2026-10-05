// import { useState, useCallback, useEffect, useRef } from 'react'
// import { sendOtp as sendOtpSvc, verifyOtp as verifyOtpSvc } from '../services/authService.js'

// /**
//  * useOTP — manages the OTP send/verify lifecycle.
//  *
//  * Behaviour:
//  *  - 30s resend cooldown
//  *  - up to 5 verify attempts
//  *  - exposes loading / success / error states
//  *  - surfaces demo OTP so reviewers can complete the flow without SMS
//  */
// export function useOTP({ role, onVerified } = {}) {
//   const [mobile, setMobile] = useState('')
//   const [name, setName] = useState('')
//   const [demoOtp, setDemoOtp] = useState(null)
//   const [status, setStatus] = useState('idle') // idle | sending | sent | verifying | verified | error
//   const [error, setError] = useState(null)
//   const [cooldown, setCooldown] = useState(0)
//   const cooldownTimer = useRef(null)

//   useEffect(() => {
//     return () => clearInterval(cooldownTimer.current)
//   }, [])

//   const startCooldown = useCallback(() => {
//     setCooldown(30)
//     clearInterval(cooldownTimer.current)
//     cooldownTimer.current = setInterval(() => {
//       setCooldown((c) => {
//         if (c <= 1) {
//           clearInterval(cooldownTimer.current)
//           return 0
//         }
//         return c - 1
//       })
//     }, 1000)
//   }, [])

//   const sendOtp = useCallback(async () => {
//     setStatus('sending')
//     setError(null)
//     setDemoOtp(null)
//     try {
//       const res = await sendOtpSvc({ mobile, role, name })
//       setStatus('sent')
//       setDemoOtp(res.demoOtp || null)
//       startCooldown()
//       return res
//     } catch (e) {
//       setStatus('error')
//       setError(e.message || 'Failed to send OTP')
//       throw e
//     }
//   }, [mobile, name, role, startCooldown])

//   const verifyOtp = useCallback(
//     async (otp) => {
//       setStatus('verifying')
//       setError(null)
//       try {
//         const { session, user } = await verifyOtpSvc({ mobile, otp, role, name })
//         setStatus('verified')
//         setDemoOtp(null)
//         if (onVerified) onVerified({ session, user })
//         return { session, user }
//       } catch (e) {
//         setStatus('sent') // back to "OTP sent" so user can retry
//         setError(e.message || 'OTP verification failed')
//         throw e
//       }
//     },
//     [mobile, name, role, onVerified]
//   )

//   const reset = useCallback(() => {
//     setStatus('idle')
//     setError(null)
//     setDemoOtp(null)
//     setMobile('')
//     setName('')
//     setCooldown(0)
//     clearInterval(cooldownTimer.current)
//   }, [])

//   return {
//     mobile, setMobile,
//     name, setName,
//     demoOtp,
//     status,
//     error,
//     cooldown,
//     canResend: cooldown === 0 && status === 'sent',
//     sendOtp,
//     verifyOtp,
//     reset,
//   }
// }
import { useState, useCallback, useEffect, useRef } from 'react'
import { sendOtp as sendOtpSvc, verifyOtp as verifyOtpSvc } from '../services/authService.js'

/**
 * useOTP — manages the OTP send/verify lifecycle.
 *
 * Behaviour:
 *  - 30s resend cooldown
 *  - up to 5 verify attempts
 *  - exposes loading / success / error states
 *  - surfaces demo OTP so reviewers can complete the flow without SMS
 */
export function useOTP({ role, onVerified } = {}) {
  const [mobile, setMobileState] = useState('')
  const [name, setNameState] = useState('')
  // Refs mirror state so sendOtp()/verifyOtp() read the latest values even
  // when called in the same tick as setMobile()/setName() (e.g. form submit
  // handlers that set the mobile then immediately request an OTP).
  const mobileRef = useRef('')
  const nameRef = useRef('')
  const [demoOtp, setDemoOtp] = useState(null)
  const [status, setStatus] = useState('idle') // idle | sending | sent | verifying | verified | error
  const [error, setError] = useState(null)
  const [cooldown, setCooldown] = useState(0)
  const cooldownTimer = useRef(null)

  useEffect(() => {
    return () => clearInterval(cooldownTimer.current)
  }, [])

  const startCooldown = useCallback(() => {
    setCooldown(30)
    clearInterval(cooldownTimer.current)
    cooldownTimer.current = setInterval(() => {
      setCooldown((c) => {
        if (c <= 1) {
          clearInterval(cooldownTimer.current)
          return 0
        }
        return c - 1
      })
    }, 1000)
  }, [])

  const setMobile = useCallback((v) => {
    mobileRef.current = typeof v === 'function' ? v(mobileRef.current) : v
    setMobileState(mobileRef.current)
  }, [])

  const setName = useCallback((v) => {
    nameRef.current = typeof v === 'function' ? v(nameRef.current) : v
    setNameState(nameRef.current)
  }, [])

  const sendOtp = useCallback(async () => {
    setStatus('sending')
    setError(null)
    setDemoOtp(null)
    try {
      const res = await sendOtpSvc({ mobile: mobileRef.current, role, name: nameRef.current })
      setStatus('sent')
      setDemoOtp(res.demoOtp || null)
      startCooldown()
      return res
    } catch (e) {
      setStatus('error')
      setError(e.message || 'Failed to send OTP')
      throw e
    }
  }, [role, startCooldown])

  const verifyOtp = useCallback(
    async (otp) => {
      setStatus('verifying')
      setError(null)
      try {
        const { session, user } = await verifyOtpSvc({ mobile: mobileRef.current, otp, role, name: nameRef.current })
        setStatus('verified')
        setDemoOtp(null)
        if (onVerified) onVerified({ session, user })
        return { session, user }
      } catch (e) {
        setStatus('sent') // back to "OTP sent" so user can retry
        setError(e.message || 'OTP verification failed')
        throw e
      }
    },
    [role, onVerified]
  )

  const reset = useCallback(() => {
    setStatus('idle')
    setError(null)
    setDemoOtp(null)
    mobileRef.current = ''
    nameRef.current = ''
    setMobileState('')
    setNameState('')
    setCooldown(0)
    clearInterval(cooldownTimer.current)
  }, [])

  return {
    mobile, setMobile,
    name, setName,
    demoOtp,
    status,
    error,
    cooldown,
    canResend: cooldown === 0 && status === 'sent',
    sendOtp,
    verifyOtp,
    reset,
  }
}
