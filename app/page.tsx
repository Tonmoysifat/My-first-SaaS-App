import React from 'react';
import CompanionCards from "@/components/CompanionCards";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import {recentSessions} from "@/constants";

const Page = () => {
    return (
        <main>
            {/*<h1 className="text-2xl underline">*/}
            <h1>
                Popular Companions
            </h1>
            <section className="home-section">
                <CompanionCards
                    id="123"
                    name="Neura the Brainy Explorer"
                    topic="Neural Network of the Brain"
                    subject="Sicence"
                    duration={45}
                    color="#E5D0FF"

                />

                <CompanionCards
                    id="456"
                    name="Countsy the Number Wizard"
                    topic="Derivatives & Integrals"
                    subject="Maths"
                    duration={30}
                    color="#FFDA6E"

                />

                <CompanionCards
                    id="789"
                    name="Verba the Vocabulary Builder"
                    topic="English Literature"
                    subject="Language"
                    duration={445}
                    color="#BDE7FF"

                />
            </section>

            <section className="home-section">
                <CompanionsList
                title="Recently Completed Lessons"
                companions={recentSessions}
                classNames="w-2/3 max-lg:w-full"
                />
                <CTA/>
            </section>
        </main>
    );
};

export default Page;






// NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_cHJvbW90ZWQtcG9ueS0yLmNsZXJrLmFjY291bnRzLmRldiQ
// CLERK_SECRET_KEY=sk_test_NavHwoZozvORnb8e88nbjB4ZTPhRqZkPlKqk2WtOPp
//
// NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
// NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
// NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/
//
// NEXT_PUBLIC_SUPABASE_URL=https://ydsacgpiqkfvbuljahcn.supabase.co
// NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlkc2FjZ3BpcWtmdmJ1bGphaGNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3Njc5NzAsImV4cCI6MjA3NDM0Mzk3MH0.WkAsE5XNIf3XtTywlKRPjwm87cf3pdVV7iJpfIYC9G8
