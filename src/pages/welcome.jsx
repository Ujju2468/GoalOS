import AnimatedBackground from "../components/welcome/AnimatedBackground";
import Hero from "../components/welcome/Hero";
import FloatingCards from "../components/welcome/FloatingCards";
import "../styles/welcome.css";
import MouseGlow from "../components/welcome/MouseGlow";

export default function Welcome() {

  return (

    <main
      className="welcome-page"
      onMouseMove={(e) => {
        const glow = document.querySelector(".mouse-glow");
        if (glow) {
          glow.style.left = e.clientX + "px";
          glow.style.top = e.clientY + "px";
        }
      }}
    >
      <AnimatedBackground />

      <div className="welcome-overlay" />

      <FloatingCards />
      <Hero />
      <MouseGlow />
    </main>

  );

}