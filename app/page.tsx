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