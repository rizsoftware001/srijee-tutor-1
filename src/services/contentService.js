/**
 * contentService — public CMS-like content access.
 *
 * In the demo build this reads from src/data/*.js files directly.
 * When the backend is connected, swap each function body with an
 * apiClient.get() call to /api/v1/content/<resource>.
 */

import { classes, classGroups } from '../data/classes.js'
import { boards } from '../data/boards.js'
import { subjects } from '../data/subjects.js'
import { courses } from '../data/courses.js'
import { tuitionTypes } from '../data/tuitionTypes.js'
import { locations } from '../data/locations.js'
import { testimonials } from '../data/testimonials.js'
import { faqs } from '../data/faqs.js'
import { blogPosts, blogCategories } from '../data/blogPosts.js'

export const contentService = {
  getClasses:        async () => delayWrap(classes),
  getClassGroups:    async () => delayWrap(classGroups),
  getBoards:         async () => delayWrap(boards),
  getSubjects:       async () => delayWrap(subjects),
  getCourses:        async () => delayWrap(courses),
  getTuitionTypes:   async () => delayWrap(tuitionTypes),
  getLocations:      async () => delayWrap(locations),
  getTestimonials:   async () => delayWrap(testimonials),
  getFaqs:           async () => delayWrap(faqs),
  getBlogPosts:      async () => delayWrap(blogPosts),
  getBlogPost:       async (slug) => delayWrap(blogPosts.find((p) => p.slug === slug) || null),
  getBlogCategories: async () => delayWrap(blogCategories),
}

const delayWrap = (data) =>
  new Promise((resolve) => setTimeout(() => resolve(data), 200))
