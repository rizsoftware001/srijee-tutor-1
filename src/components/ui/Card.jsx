import React from 'react'
import { cn } from '../../utils/cn.js'

export function Card({ className, children, hover = false, as: Comp = 'div', ...rest }) {
  return (
    <Comp className={cn('card', hover && 'card-hover', className)} {...rest}>
      {children}
    </Comp>
  )
}

export function CardBody({ className, children }) {
  return <div className={cn('p-5 sm:p-6', className)}>{children}</div>
}

export function CardHeader({ className, children, title, subtitle, action }) {
  return (
    <div className={cn('flex items-start justify-between gap-4 border-b border-ink-100 p-5 sm:p-6', className)}>
      {(title || subtitle) && (
        <div>
          {title && <h3 className="h5 text-ink-900">{title}</h3>}
          {subtitle && <p className="mt-1 text-sm text-ink-500">{subtitle}</p>}
        </div>
      )}
      {action}
      {children}
    </div>
  )
}

export function CardFooter({ className, children }) {
  return <div className={cn('border-t border-ink-100 p-5 sm:p-6', className)}>{children}</div>
}

export default Card
