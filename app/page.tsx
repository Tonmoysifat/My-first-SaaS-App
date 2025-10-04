import React from 'react';
import CompanionCards from "@/components/CompanionCards";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import {recentSessions} from "@/constants";
import {getAllCompanions, getRecentSessionHistory} from "@/lib/actions/companions.action";
import {getSubjectColor} from "@/lib/utils";

const Page = async () => {
    const companions = await getAllCompanions({limit: 3});
    const recentSessionsCompanions = await getRecentSessionHistory(10);
    return (
        <main>
            {/*<h1 className="text-2xl underline">*/}
            <h1>
                Popular Companions
            </h1>
            <section className="home-section">
                {
                    companions?.map((companions) => (
                        <CompanionCards
                            key={companions.id}
                            {...companions}
                            color={getSubjectColor(companions.subject)}

                        />
                    ))
                }
            </section>

            <section className="home-section">
                <CompanionsList
                    title="Recently Completed Lessons"
                    companions={recentSessionsCompanions}
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

// NEXT_PUBLIC_VAPI_WEB_TOKEN=1805709a-d2a4-481a-81be-02842ff9f033