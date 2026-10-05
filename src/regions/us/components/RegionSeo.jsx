import React, { useEffect } from 'react'

/**
 * RegionSeo — a lightweight per-region SEO manager.
 *
 * Mirrors the imperative <Seo> pattern from the India app but is region-aware:
 * the `path` prop is the FULL route (e.g., '/us/about') and the title/description
 * are passed explicitly per page. Falls back to a generic regional default.
 */

const DEFAULTS = {
  '/us': { title: 'Srijee Tutor USA — Find a Verified Tutor for K-12, AP, SAT & ACT', description: 'Modern online tutoring for US students. Common Core aligned, AP, SAT, ACT prep, verified tutors, free demo class.' },
  '/us/about': { title: 'About Srijee Tutor USA — Our Mission & Story', description: 'Learn how Srijee Tutor brings verified online tutoring to families across the United States.' },
  '/us/contact': { title: 'Contact Srijee Tutor USA — Free Counsellor Consultation', description: 'Talk to a US-based Srijee Tutor counsellor about your child\'s tutoring needs.' },
  '/us/find-tutor': { title: 'Find a Tutor — Srijee Tutor USA', description: 'Tell us your grade level, subjects, and goals — get matched with 2-3 verified tutors.' },
  '/us/subjects': { title: 'Subjects — Srijee Tutor USA', description: 'Browse all US academic subjects: Mathematics, Science, English, History, Foreign Languages, and more.' },
  '/us/curriculum': { title: 'Curriculum & Test Prep — Srijee Tutor USA', description: 'Common Core, AP, SAT, ACT, state standards — tutors aligned with US education systems.' },
  '/us/locations': { title: 'Locations — Srijee Tutor USA', description: 'Online tutoring across all 50 states, with regional counsellors ready to help.' },
  '/us/how-it-works': { title: 'How It Works — Srijee Tutor USA', description: '5 steps from "share your needs" to "start learning" with Srijee Tutor USA.' },
  '/us/become-a-tutor': { title: 'Become a Tutor — Srijee Tutor USA', description: 'Join Srijee Tutor as a verified US tutor. Get matched with students near you.' },
  '/us/blog': { title: 'Blog — Srijee Tutor USA', description: 'Tutoring tips, college prep guidance, and learning resources for US families.' },

  // Canada frontend (added by Task 3b-CA)
  '/ca': { title: 'Srijee Tutor Canada — Personalized Tutoring for Provincial Curriculum & French Immersion', description: 'Verified online tutors for Canadian families. Provincial curriculum aligned (Ontario, BC, Alberta, Quebec), French immersion support, university prep, and free demo class.' },
  '/ca/about': { title: 'About Srijee Tutor Canada — Our Mission & Story', description: 'Learn how Srijee Tutor brings verified online tutoring to Canadian families across all provinces.' },
  '/ca/contact': { title: 'Contact Srijee Tutor Canada — Free Consultation', description: 'Talk to a Canada-based Srijee Tutor consultant about your child\'s tutoring needs.' },
  '/ca/find-tutor': { title: 'Find a Tutor — Srijee Tutor Canada', description: 'Tell us your grade level, subjects, and goals — get matched with 2-3 verified Canadian-aligned tutors.' },
  '/ca/subjects': { title: 'Subjects — Srijee Tutor Canada', description: 'Browse all Canadian academic subjects: Mathematics, English, Science, French, History, Geography, and more.' },
  '/ca/curriculum': { title: 'Curriculum & Test Prep — Srijee Tutor Canada', description: 'Provincial curriculum (Ontario, BC, Alberta, Quebec), IB, university prep, French immersion — tutors aligned with Canadian education systems.' },
  '/ca/locations': { title: 'Locations — Srijee Tutor Canada', description: 'Online tutoring across Canada, with regional consultants ready to help from coast to coast.' },
  '/ca/how-it-works': { title: 'How It Works — Srijee Tutor Canada', description: '5 steps from "share your needs" to "start learning" with Srijee Tutor Canada.' },
  '/ca/become-a-tutor': { title: 'Become a Tutor — Srijee Tutor Canada', description: 'Join Srijee Tutor as a verified tutor for Canadian families. Get matched with students near you.' },
  '/ca/blog': { title: 'Blog — Srijee Tutor Canada', description: 'Tutoring tips, provincial exam guidance, and learning resources for Canadian families.' },

  // United Kingdom frontend (added by Task 3b-UK)
  '/uk': { title: 'Srijee Tutor UK — Verified Tutors for GCSE, A-Level, IB & Common Entrance', description: 'Elegant, expert online tuition for every stage of the UK academic journey. Verified tutors, exam-board aligned, free demo lesson.' },
  '/uk/about': { title: 'About Srijee Tutor UK — Our Mission & Story', description: 'Learn how Srijee Tutor brings verified online tuition to families across the United Kingdom.' },
  '/uk/contact': { title: 'Contact Srijee Tutor UK — Free Consultant Consultation', description: 'Talk to a UK-based Srijee Tutor consultant about your child\'s tuition needs.' },
  '/uk/find-tutor': { title: 'Find a Tutor — Srijee Tutor UK', description: 'Tell us your key stage, subjects, and goals — get matched with 2-3 verified UK-aligned tutors.' },
  '/uk/subjects': { title: 'Subjects — Srijee Tutor UK', description: 'Browse all UK academic subjects: Mathematics, English, Sciences, Humanities, Languages, and more.' },
  '/uk/curriculum': { title: 'Key Stages, GCSE & A-Level — Srijee Tutor UK', description: 'National Curriculum, GCSE/IGCSE, A-Level, IB Diploma, and 11+/13+ Common Entrance — tutors aligned with UK education systems.' },
  '/uk/locations': { title: 'Locations — Srijee Tutor UK', description: 'Online tuition across the United Kingdom, with regional consultants ready to help.' },
  '/uk/how-it-works': { title: 'How It Works — Srijee Tutor UK', description: 'Five steps from "share your needs" to "start learning" with Srijee Tutor UK.' },
  '/uk/become-a-tutor': { title: 'Become a Tutor — Srijee Tutor UK', description: 'Join Srijee Tutor as a verified UK tutor. Get matched with families near you.' },
  '/uk/blog': { title: 'Blog — Srijee Tutor UK', description: 'Tuition tips, GCSE & A-Level guidance, and learning resources for UK families.' },

  // United Arab Emirates frontend (added by Task 3b-AE)
  '/ae': { title: 'Srijee Tutor UAE — Verified Tutors for MOE, British, American, IB, CBSE & ICSE', description: 'Premium online tutoring across the UAE. Multi-curriculum support (MOE, British, American, IB, CBSE, ICSE), verified tutors, free demo class. AED pricing.' },
  '/ae/about': { title: 'About Srijee Tutor UAE — Our Mission & Story', description: 'Learn how Srijee Tutor brings verified online tutoring to families across the United Arab Emirates.' },
  '/ae/contact': { title: 'Contact Srijee Tutor UAE — Free Educational Consultant Consultation', description: 'Talk to a UAE-based Srijee Tutor educational consultant about your child\'s tutoring needs.' },
  '/ae/find-tutor': { title: 'Find a Tutor — Srijee Tutor UAE', description: 'Tell us your curriculum, academic level, and goals — get matched with 2-3 verified UAE-aligned tutors.' },
  '/ae/subjects': { title: 'Subjects — Srijee Tutor UAE', description: 'Browse all UAE academic subjects: Mathematics, English, Arabic, Physics, Chemistry, Biology, Computer Science, Business Studies, Economics, French.' },
  '/ae/curriculum': { title: 'Curriculum & Test Prep — Srijee Tutor UAE', description: 'UAE MOE, British, American, IB, CBSE, ICSE — verified tutors aligned with every UAE curriculum track.' },
  '/ae/locations': { title: 'Locations — Srijee Tutor UAE', description: 'Online tutoring across all Emirates — Abu Dhabi, Dubai, Sharjah, Al Ain, and beyond. Free demo class.' },
  '/ae/how-it-works': { title: 'How It Works — Srijee Tutor UAE', description: '5 steps from "share your needs" to "start learning" with Srijee Tutor UAE.' },
  '/ae/become-a-tutor': { title: 'Become a Tutor — Srijee Tutor UAE', description: 'Join Srijee Tutor as a verified UAE tutor. Multi-curriculum expertise welcome.' },
  '/ae/blog': { title: 'Blog — Srijee Tutor UAE', description: 'Tutoring tips, curriculum guidance, and learning resources for UAE families.' },
}

export default function RegionSeo({ path, title, description }) {
  useEffect(() => {
    const config = DEFAULTS[path] || { title: 'Srijee Tutor USA', description: 'Verified online tutoring for US students.' }
    document.title = title || config.title
    setMeta('description', description || config.description)
    setLink('canonical', `https://srijeetutor.com${path}`)
    setProp('og:title', title || config.title)
    setProp('og:description', description || config.description)
    setProp('og:type', 'website')
    setProp('og:site_name', 'Srijee Tutor')
  }, [path, title, description])

  return null
}

function setMeta(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function setProp(prop, content) {
  let el = document.querySelector(`meta[property="${prop}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', prop)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}
