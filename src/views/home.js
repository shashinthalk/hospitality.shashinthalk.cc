import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Frugal Complete Jay</title>
        <meta property="og:title" content="Frugal Complete Jay" />
      </Helmet>
      <Navbar8
        page4Description={
          <Fragment>
            <span className="home-text100">Page Four Description</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text101">Main Action</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text102">Work Experience</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text103">Page One</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text104">About</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text105">Page Four</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text106">Page Two</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text107">Contact</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text108">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text109">Page Two Description</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text110">Education</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text111">Page Three</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">Page Three Description</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text113">Secondary Action</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action2={
          <Fragment>
            <span className="home-text114">Secondary action</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text115">Main action</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text116">Nishan Shashintha</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text117">
              ICT graduate with hospitality experience based in Salzburg,
              Austria
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature3Description={
          <Fragment>
            <span className="home-text118">
              Experience working in a fast-paced environment
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text119">Adaptability</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text120">
              Providing exceptional customer service
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text121">Hospitality at Hotel Sacher</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text122">
              Worked in various departments to gain a holistic understanding of
              hotel operations
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text123">Customer Service Excellence</span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        heading1={
          <Fragment>
            <span className="home-text124">Ready to collaborate?</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Let&apos;s work together to bring your ideas to life.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text126">Contact Me</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature3Description={
          <Fragment>
            <span className="home-text127">
              Completed Bachelor&apos;s degree in ICT with a focus on web
              development, proficient in HTML, CSS, JavaScript, and responsive
              design principles.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text128">
              Worked as a front desk receptionist handling guest check-ins,
              reservations, and providing exceptional customer service.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text129">
              Hospitality Experience at Hotel am Mirabellplatz
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text130">
              Hospitality Experience at Hotel Sacher
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              Managed guest relations, assisted with event planning, and ensured
              guest satisfaction during their stay.
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text132">
              ICT Graduate with Specialization in Web Development
            </span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan3Price={
          <Fragment>
            <span className="home-text133">$30</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text134">Sign Up Now</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text135">Basic plan</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text136">Sign Up Now</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text137">Enterprise plan</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text138">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text139">Feature 2 included</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text140">Additional feature for Plan 2</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text141">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text142">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text143">Feature 2 included</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text144">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text145">Feature 4 included</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text146">$200</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text147">Upgrade Plan</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text148">Sign Up Now</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text149">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text150">Feature 3 included</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text151">$15</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text152">Standard Plan</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text153">Additional feature for Plan 2</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text154">Upgrade Plan</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text155">Feature text goes here</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text156">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              auctor, nisl at ultricies ultrices, libero turpis vehicula purus,
              nec interdum metus urna nec nunc.
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text157">Feature 1 included</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text158">Pricing plan</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text159">Feature text goes here</span>
          </Fragment>
        }
        plan1={
          <Fragment>
            <span className="home-text160">Basic Plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text161">Business plan</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text162">Additional feature for Plan 1</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text163">Additional feature for Plan 1</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text164">Feature text goes here</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text165">$250</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text166">$20</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text167">$350</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text168">Additional feature for Plan 2</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text169">Feature text goes here</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text170">$150</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text171">$25</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text172">$300</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text174">$35</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text175">Additional feature for Plan 1</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text176">Feature 3 included</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text177">$100</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text178">Feature 1 included</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text179">Feature text goes here</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text180">
              Sed euismod, justo et lacinia malesuada, nisi libero ultricies
              justo, vel tincidunt turpis purus vel libero.
            </span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text181">Upgrade Plan</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text182">$10</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text183">Premium Plan</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Description={
          <Fragment>
            <span className="home-text184">
              Worked as a Front Desk Receptionist at Hotel Sacher, providing
              exceptional customer service and ensuring guest satisfaction.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text185">
              Graduated with a degree in ICT from a university in Sri Lanka,
              equipped with technical skills and knowledge in the field.
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text186">
              Hotel am Mirabellplatz Experience
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text187">
              Served as a Guest Relations Officer at Hotel am Mirabellplatz,
              handling guest inquiries, resolving issues, and enhancing overall
              guest experience.
            </span>
          </Fragment>
        }
        step1Title={
          <Fragment>
            <span className="home-text188">Hotel Sacher Experience</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text189">Education</span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text190">
              Fluent in English and Sinhala, with proficiency in communication
              and writing in both languages.
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text191">Language Skills</span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        author2Position={
          <Fragment>
            <span className="home-text192">Head of Marketing, Company XYZ</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text193">CEO, Company ABC</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text194">John Smith</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text195">Michael Brown</span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text196">
              Working with Nishan was a pleasure. His professionalism and
              dedication to delivering high-quality results are commendable.
            </span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text197">Emily Johnson</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text198">HR Manager, Innovate Co.</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text199">Sarah Davis</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text200">
              Nishan&apos;s attention to detail and problem-solving skills have
              greatly contributed to the success of our projects. He is a
              valuable asset to any team.
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text201">CTO, Tech Solutions Ltd.</span>
          </Fragment>
        }
        review1={
          <Fragment>
            <span className="home-text202">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text203">Testimonials</span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text204">
              Nishan&apos;s technical expertise and collaborative approach make
              him an exceptional team player. I highly recommend him for any IT
              project.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text205">
              It&apos;s rare to find someone with both strong technical skills
              and excellent communication abilities. Nishan excels in both
              areas, making him a standout professional.
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text206">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text207">
              Currently based in Salzburg, Austria
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text208">Locations</span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text209">Originally from Sri Lanka</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text210">Salzburg, Austria</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text211">Sri Lanka</span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link5={
          <Fragment>
            <span className="home-text212">Link 5</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text213">Language Skills</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text214">Education</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text215">Terms of Use</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text216">Work Experience</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text217">Contact</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text218">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text219">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
