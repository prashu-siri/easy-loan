import { useEffect } from "react";

const SessionTimeout = () => {

  const updateTimeout = () => {
    const sessionTimer = Date.now() + 1000 * 60;
    localStorage.setItem('sessionTimer', sessionTimer);
  }

  const timeout = () => {
    const sessionTimer = localStorage.getItem('sessionTimer');
    if(sessionTimer < Date.now()) {
      console.log("Session timed out");
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      timeout();
    }, 1000 * 60);

    return () => clearInterval(interval);
  }, [])

  useEffect(() => {
    window.addEventListener("click", updateTimeout);
    window.addEventListener("mousemove", updateTimeout);
    window.addEventListener("scroll", updateTimeout);
    window.addEventListener("keypress", updateTimeout);

    return () => {
      window.removeEventListener("click", updateTimeout);
      window.removeEventListener("mousemove", updateTimeout);
      window.removeEventListener("scroll", updateTimeout);
      window.removeEventListener("keypress", updateTimeout);
    }
  }, [])

  return (
    <></>
  )
}
 
export default SessionTimeout;