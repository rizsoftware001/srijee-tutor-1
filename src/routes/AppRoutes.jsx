import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { PublicLayout } from '../layouts/PublicLayout.jsx'
import { TeacherLayout } from '../layouts/TeacherLayout.jsx'
import { StudentLayout } from '../layouts/StudentLayout.jsx'
import { AdminLayout } from '../layouts/AdminLayout.jsx'
import { ProtectedRoute } from './ProtectedRoute.jsx'
import { PageLoader } from '../components/ui/Skeleton.jsx'

// USA frontend
import USALayout from '../regions/us/components/USALayout.jsx'
import USAHome from '../regions/us/pages/USAHome.jsx'
import USAAbout from '../regions/us/pages/USAAbout.jsx'
import USAContact from '../regions/us/pages/USAContact.jsx'
import USAFindTutor from '../regions/us/pages/USAFindTutor.jsx'
import USASubjects from '../regions/us/pages/USASubjects.jsx'
import USACurriculum from '../regions/us/pages/USACurriculum.jsx'
import USALocations from '../regions/us/pages/USALocations.jsx'
import USAHowItWorks from '../regions/us/pages/USAHowItWorks.jsx'
import USABecomeTutor from '../regions/us/pages/USABecomeTutor.jsx'
import USABlog from '../regions/us/pages/USABlog.jsx'

// UK frontend
import UKLayout from '../regions/uk/components/UKLayout.jsx'
import UKHome from '../regions/uk/pages/UKHome.jsx'
import UKAbout from '../regions/uk/pages/UKAbout.jsx'
import UKContact from '../regions/uk/pages/UKContact.jsx'
import UKFindTutor from '../regions/uk/pages/UKFindTutor.jsx'
import UKSubjects from '../regions/uk/pages/UKSubjects.jsx'
import UKCurriculum from '../regions/uk/pages/UKCurriculum.jsx'
import UKLocations from '../regions/uk/pages/UKLocations.jsx'
import UKHowItWorks from '../regions/uk/pages/UKHowItWorks.jsx'
import UKBecomeTutor from '../regions/uk/pages/UKBecomeTutor.jsx'
import UKBlog from '../regions/uk/pages/UKBlog.jsx'

// Canada frontend
import CanadaLayout from '../regions/ca/components/CanadaLayout.jsx'
import CanadaHome from '../regions/ca/pages/CanadaHome.jsx'
import CanadaAbout from '../regions/ca/pages/CanadaAbout.jsx'
import CanadaContact from '../regions/ca/pages/CanadaContact.jsx'
import CanadaFindTutor from '../regions/ca/pages/CanadaFindTutor.jsx'
import CanadaSubjects from '../regions/ca/pages/CanadaSubjects.jsx'
import CanadaCurriculum from '../regions/ca/pages/CanadaCurriculum.jsx'
import CanadaLocations from '../regions/ca/pages/CanadaLocations.jsx'
import CanadaHowItWorks from '../regions/ca/pages/CanadaHowItWorks.jsx'
import CanadaBecomeTutor from '../regions/ca/pages/CanadaBecomeTutor.jsx'
import CanadaBlog from '../regions/ca/pages/CanadaBlog.jsx'

// UAE frontend
import UAELayout from '../regions/ae/components/UAELayout.jsx'
import UAEHome from '../regions/ae/pages/UAEHome.jsx'
import UAEAbout from '../regions/ae/pages/UAEAbout.jsx'
import UAEContact from '../regions/ae/pages/UAEContact.jsx'
import UAEFindTutor from '../regions/ae/pages/UAEFindTutor.jsx'
import UAESubjects from '../regions/ae/pages/UAESubjects.jsx'
import UAECurriculum from '../regions/ae/pages/UAECurriculum.jsx'
import UAELocations from '../regions/ae/pages/UAELocations.jsx'
import UAEHowItWorks from '../regions/ae/pages/UAEHowItWorks.jsx'
import UAEBecomeTutor from '../regions/ae/pages/UAEBecomeTutor.jsx'
import UAEBlog from '../regions/ae/pages/UAEBlog.jsx'

// India public pages (now at /* — India is the default homepage)
import Home from '../pages/public/Home.jsx'
import About from '../pages/public/About.jsx'
import Contact from '../pages/public/Contact.jsx'
import BecomeTutor from '../pages/public/BecomeTutor.jsx'
import Blog from '../pages/public/Blog.jsx'
import BlogPost from '../pages/public/BlogPost.jsx'
import NotFound from '../pages/public/NotFound.jsx'
import TuitionPage from '../pages/public/TuitionPage.jsx'
import Gallery from '../pages/public/Gallery.jsx'
import ForeignLanguage from '../pages/public/ForeignLanguage.jsx'
import SpokenEnglish from '../pages/public/SpokenEnglish.jsx'
import ComputerCourses from '../pages/public/ComputerCourses.jsx'
import CompetitiveExams from '../pages/public/CompetitiveExams.jsx'
import OurPresents from '../pages/public/OurPresents.jsx'
import OurCenters from '../pages/public/OurCenters.jsx'
import { TuitionIndex, ClassesIndex, BoardsIndex, SubjectsIndex, CoursesIndex } from '../pages/public/IndexPages.jsx'
import OurPresence from '../pages/public/OurPresence.jsx'
import MediaNews from '../pages/public/MediaNews.jsx'
import InvestorNote from '../pages/public/InvestorNote.jsx'
import MasterclassHomeTuition from '../pages/public/MasterclassHomeTuition.jsx'
import TeacherSelection from '../pages/public/TeacherSelection.jsx'
import FreeDoubtClearing from '../pages/public/FreeDoubtClearing.jsx'

// India auth pages
import { TeacherLogin } from '../pages/auth/TeacherLogin.jsx'
import { StudentLogin } from '../pages/auth/StudentLogin.jsx'
import { AdminLogin } from '../pages/auth/AdminLogin.jsx'

// India student flow
import Requirement from '../pages/student/Requirement.jsx'
import StudentDashboard from '../pages/student/Dashboard.jsx'
import SuggestedTutors from '../pages/student/Tutors.jsx'
import StudentMessages from '../pages/student/Messages.jsx'

// India teacher flow
import ProfileWizard from '../pages/teacher/ProfileWizard.jsx'
import TeacherDashboard from '../pages/teacher/Dashboard.jsx'
import TeacherProfile from '../pages/teacher/Profile.jsx'
import Opportunities from '../pages/teacher/Opportunities.jsx'
import TeacherStudents from '../pages/teacher/Students.jsx'
import TeacherSchedule from '../pages/teacher/Schedule.jsx'
import TeacherEarnings from '../pages/teacher/Earnings.jsx'
import TeacherSettings from '../pages/teacher/Settings.jsx'

// India admin CRM
import AdminDashboard from '../pages/admin/Dashboard.jsx'
import AdminLeads from '../pages/admin/Leads.jsx'
import AdminLeadDetail from '../pages/admin/LeadDetail.jsx'
import AdminTeachers from '../pages/admin/Teachers.jsx'
import AdminTeacherDetail from '../pages/admin/TeacherDetail.jsx'
import TutorMatching from '../pages/admin/TutorMatching.jsx'
import AdminDemos from '../pages/admin/Demos.jsx'
import AdminRequirements from '../pages/admin/Requirements.jsx'
import AdminCMS from '../pages/admin/CMS.jsx'
import AdminSettings from '../pages/admin/Settings.jsx'

export function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* ====================================================================
            INDIA FRONTEND (/* — India is the default homepage)
            Per spec §1: The existing India frontend must remain the default
            homepage. The Origin Selection modal pops up over it after 1s.
            ==================================================================== */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/become-a-tutor" element={<BecomeTutor />} />
          <Route path="/tuition" element={<TuitionIndex />} />
          <Route path="/online-tuition" element={<TuitionPage variant="online-tuition" />} />
          <Route path="/home-tuition" element={<TuitionPage variant="home-tuition" />} />
          <Route path="/one-to-one-tuition" element={<TuitionPage variant="one-to-one-tuition" />} />
          <Route path="/courses" element={<CoursesIndex />} />
          <Route path="/courses/foreign-language" element={<ForeignLanguage />} />
          <Route path="/courses/spoken-english" element={<SpokenEnglish />} />
          <Route path="/courses/computer-course" element={<ComputerCourses />} />
          <Route path="/courses/competitive-exams" element={<CompetitiveExams />} />
          <Route path="/our-presents" element={<OurPresents />} />
          <Route path="/our-centers" element={<OurCenters />} />
          <Route path="/classes" element={<ClassesIndex />} />
          <Route path="/boards" element={<BoardsIndex />} />
          <Route path="/subjects" element={<SubjectsIndex />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/our-presence" element={<OurPresence />} />
          <Route path="/media-news" element={<MediaNews />} />
          <Route path="/investor-note" element={<InvestorNote />} />
          <Route path="/masterclass/home-tuition" element={<MasterclassHomeTuition />} />
          <Route path="/home-tuition/teacher-selection" element={<TeacherSelection />} />
          <Route path="/free-doubt-clearing" element={<FreeDoubtClearing />} />
        </Route>

        {/* India student lead form (public) */}
        <Route element={<PublicLayout />}>
          <Route path="/student/requirement" element={<Requirement />} />
        </Route>

        {/* India auth */}
        <Route element={<PublicLayout />}>
          <Route path="/teacher/login" element={<TeacherLogin />} />
          <Route path="/student/login" element={<StudentLogin />} />
          <Route path="/admin/login" element={<AdminLogin />} />
        </Route>

        {/* India teacher portal (protected) */}
        <Route
          element={
            <ProtectedRoute roles={['TEACHER']} redirect="/teacher/login">
              <TeacherLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/teacher/profile" element={<TeacherProfile />} />
          <Route path="/teacher/profile/edit" element={<ProfileWizard />} />
          <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
          <Route path="/teacher/opportunities" element={<Opportunities />} />
          <Route path="/teacher/students" element={<TeacherStudents />} />
          <Route path="/teacher/schedule" element={<TeacherSchedule />} />
          <Route path="/teacher/earnings" element={<TeacherEarnings />} />
          <Route path="/teacher/settings" element={<TeacherSettings />} />
        </Route>

        {/* India student portal (protected) */}
        <Route
          element={
            <ProtectedRoute roles={['STUDENT', 'PARENT']} redirect="/student/login">
              <StudentLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/student/tutors" element={<SuggestedTutors />} />
          <Route path="/student/messages" element={<StudentMessages />} />
        </Route>

        {/* India admin CRM (protected) */}
        <Route
          element={
            <ProtectedRoute roles={['ADMIN', 'SUPER_ADMIN']} redirect="/admin/login">
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/leads" element={<AdminLeads />} />
          <Route path="/admin/leads/:id" element={<AdminLeadDetail />} />
          <Route path="/admin/teachers" element={<AdminTeachers />} />
          <Route path="/admin/teachers/:id" element={<AdminTeacherDetail />} />
          <Route path="/admin/matching" element={<TutorMatching />} />
          <Route path="/admin/demos" element={<AdminDemos />} />
          <Route path="/admin/requirements" element={<AdminRequirements />} />
          <Route path="/admin/cms" element={<AdminCMS />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
        </Route>

        {/* ====================================================================
            USA FRONTEND (/us/*)
            ==================================================================== */}
        <Route element={<USALayout />}>
          <Route path="/us" element={<USAHome />} />
          <Route path="/us/about" element={<USAAbout />} />
          <Route path="/us/contact" element={<USAContact />} />
          <Route path="/us/find-tutor" element={<USAFindTutor />} />
          <Route path="/us/subjects" element={<USASubjects />} />
          <Route path="/us/curriculum" element={<USACurriculum />} />
          <Route path="/us/locations" element={<USALocations />} />
          <Route path="/us/how-it-works" element={<USAHowItWorks />} />
          <Route path="/us/become-a-tutor" element={<USABecomeTutor />} />
          <Route path="/us/blog" element={<USABlog />} />
        </Route>

        {/* ====================================================================
            UK FRONTEND (/uk/*)
            ==================================================================== */}
        <Route element={<UKLayout />}>
          <Route path="/uk" element={<UKHome />} />
          <Route path="/uk/about" element={<UKAbout />} />
          <Route path="/uk/contact" element={<UKContact />} />
          <Route path="/uk/find-tutor" element={<UKFindTutor />} />
          <Route path="/uk/subjects" element={<UKSubjects />} />
          <Route path="/uk/curriculum" element={<UKCurriculum />} />
          <Route path="/uk/locations" element={<UKLocations />} />
          <Route path="/uk/how-it-works" element={<UKHowItWorks />} />
          <Route path="/uk/become-a-tutor" element={<UKBecomeTutor />} />
          <Route path="/uk/blog" element={<UKBlog />} />
        </Route>

        {/* ====================================================================
            CANADA FRONTEND (/ca/*)
            ==================================================================== */}
        <Route element={<CanadaLayout />}>
          <Route path="/ca" element={<CanadaHome />} />
          <Route path="/ca/about" element={<CanadaAbout />} />
          <Route path="/ca/contact" element={<CanadaContact />} />
          <Route path="/ca/find-tutor" element={<CanadaFindTutor />} />
          <Route path="/ca/subjects" element={<CanadaSubjects />} />
          <Route path="/ca/curriculum" element={<CanadaCurriculum />} />
          <Route path="/ca/locations" element={<CanadaLocations />} />
          <Route path="/ca/how-it-works" element={<CanadaHowItWorks />} />
          <Route path="/ca/become-a-tutor" element={<CanadaBecomeTutor />} />
          <Route path="/ca/blog" element={<CanadaBlog />} />
        </Route>

        {/* ====================================================================
            UAE FRONTEND (/ae/*)
            ==================================================================== */}
        <Route element={<UAELayout />}>
          <Route path="/ae" element={<UAEHome />} />
          <Route path="/ae/about" element={<UAEAbout />} />
          <Route path="/ae/contact" element={<UAEContact />} />
          <Route path="/ae/find-tutor" element={<UAEFindTutor />} />
          <Route path="/ae/subjects" element={<UAESubjects />} />
          <Route path="/ae/curriculum" element={<UAECurriculum />} />
          <Route path="/ae/locations" element={<UAELocations />} />
          <Route path="/ae/how-it-works" element={<UAEHowItWorks />} />
          <Route path="/ae/become-a-tutor" element={<UAEBecomeTutor />} />
          <Route path="/ae/blog" element={<UAEBlog />} />
        </Route>

        {/* ---------- 404 ---------- */}
        <Route element={<PublicLayout />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
