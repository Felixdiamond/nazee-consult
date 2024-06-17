import "./Team.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import victor from "../../assets/osazee-victor.avif";
import naomi from "../../assets/igbinovia-omonua-naomi.avif";
import miracle from "../../assets/miracle-ndikom.avif";
import jennifer from "../../assets/jennifer-zoe-ebade.avif";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";

const teamMembers = [
  {
    name: "Osazee Victor",
    position: "Head of Institute",
    image: victor,
    socialLinks: [
      { icon: Facebook, link: "" },
      { icon: Twitter, link: "" },
      { icon: Linkedin, link: "" },
    ],
    desc: "<p>Dr victor has a decade of teaching experience in educational technology and live classroom environments in Africa and United Kingdom.</p><p>Victor is a dedicated educator with a deep understanding of how technology can revolutionize learning experiences. His journey is adorned with numerous certifications in leadership, human resources, and project management.</p><p>He spearheads initiatives that drive organizational excellence and student success and frameworks for implementing transformational projects.</p><p>Victor is shaping the future of project management education, bridging the gap between theory and practice, and inspiring the next generation of project leaders and change makers.</p>",
    short_desc:
      "Dr victor has a decade of teaching experience in educational technology and live classroom environments.",
  },
  {
    name: "Omonua Naomi",
    position: "PMP",
    image: naomi,
    socialLinks: [
      { icon: Facebook, link: "" },
      { icon: Twitter, link: "" },
      { icon: Linkedin, link: "" },
    ],
    desc: "<p>Omonua Naomi is a seasoned project management professional who is making strides in educational technology.</p><p>She has a Bachelors in computer science and several other certifications in project management from reputable institutes like Google,PMI and IBM.</p><p>She has half a decade experience in entrepreneurship and coaching.</p><p>Her tremendous impact has earned her global recognition and partnerships.</p><p>She has a dynamic vision of raising 2 million globally relevant African project managers in 2026.</p><p>Her dedication to her profession continues to inspire and impact the lives of professionals.</p>",
    short_desc:
      "Omonua Naomi is a seasoned project management professional who is making strides in educational technology.",
  },
  {
    name: "Miracle Ndikom",
    position: "Community/Operations Exec.",
    image: miracle,
    socialLinks: [
      { icon: Facebook, link: "" },
      { icon: Twitter, link: "" },
      { icon: Linkedin, link: "" },
    ],
    desc: "<p>Miracle Ndikom is a business manager and consultant, with a true passion for achieving success.</p><p>She has passion for educational technology with two Master's degrees in Public Health Biotechnology and Microbiology.</p><p>Through her strategic planning and implementation, she has empowered numerous businesses to scale and grow, earning her a reputation as a go-to resource for entrepreneurial growth and operational efficiency.</p><p>Miracle is a catalyst for transformation.</p><p>Her goal-oriented and results-driven approach to deliver value and actionable insights.</p>",
    short_desc:
      "Miracle Ndikom is a business manager and consultant, with a true passion for achieving success.",
  },
  {
    name: "Jennifer Zoe Ebade",
    position: "Associate Project Manager",
    image: jennifer,
    socialLinks: [
      { icon: Facebook, link: "" },
      { icon: Twitter, link: "" },
      { icon: Linkedin, link: "" },
    ],
    desc: "<p>She is a seasoned project manager with diverse expertise.</p><p>With a BSc in Environmental Biology and certifications in ITIL4, Agile Solutions Development, and Jira SCRUM project management, she brings a unique blend of expertise to her role as a Project Manager.</p><p>Drawing from experience in both the agri-tech and edu tech sectors, she specializes in guiding teams towards innovative solutions while prioritizing data integrity and privacy.</p><p>Her track record underscores a dedication to operational efficiency and creating collaborative environments for success.</p>    ",
    short_desc:
      "She is seasoned project manager with diverse expertise. She brings a unique blend of expertise to her role as a Project Manager.",
  },
];

export function Team() {
  return (
    <div className="slider">
      <Swiper
        spaceBetween={30}
        slidesPerView="auto"
        centeredSlides={true}
        autoplay={{ delay: 2500 }}
        loop={true}
        navigation={true}
        className="people__slide"
        modules={[Autoplay, Navigation]}
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="people__card">
              <div className="people__image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="people__info">
                <ul className="people__social">
                  {member.socialLinks.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.link}>
                        <link.icon size={20} />
                      </a>
                    </li>
                  ))}
                </ul>
                <h3 className="people__name">{member.name}</h3>
                <p className="people__position">{member.position}</p>
                <p className="people__desc">{member.short_desc}</p>
              </div>
              <Drawer>
                <DrawerTrigger asChild>
                  <div className="people__btn">
                    <span>Read more</span>
                  </div>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>About {member.name}</DrawerTitle>
                    <DrawerDescription>{member.position}</DrawerDescription>
                  </DrawerHeader>
                  <div
                    className="p-4 flex flex-col gap-4"
                    dangerouslySetInnerHTML={{ __html: member.desc }}
                  ></div>
                </DrawerContent>
              </Drawer>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
