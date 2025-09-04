import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants";
import { useEffect, type ReactNode } from "react";
import ResumeCard from "~/components/ResumeCard";
import { usePuterStore } from "~/lib/puter";
import { useLocation, useNavigate } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
    const {auth} = usePuterStore();
    const navigate = useNavigate();

    /* user tries to access homepage but since not authed, bring back to next with next as param*/
    useEffect(() => {
        if (!auth.isAuthenticated) navigate('/auth?next=/');
    }, [auth.isAuthenticated])

  function callbackfn(value: Resume, index: number, array: Resume[]): ReactNode {
    throw new Error("Function not implemented.");
  }

  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />
    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Track your Applications and Resume Ratings</h1>
        <h2>Review your submissions and check AI-powered feedback.</h2>
        </div>
    
    
    
      {resumes.length > 0 &&(
      <div className="resume-section">
        
      {resumes.map((resume: Resume) => ( 
        <ResumeCard key={resume.id} resume={resume} />
      ))} 
    </div>
      )}
    </section>
  </main>
}
