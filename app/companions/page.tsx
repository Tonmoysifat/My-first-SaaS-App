import React from 'react';
import {getAllCompanions} from "@/lib/actions/companions.action";
import CompanionCards from "@/components/CompanionCards";
import {getSubjectColor} from "@/lib/utils";
import SearchInput from "@/components/SearchInput";
import SubjectFilter from "@/components/SubjectFilter";

const CompanionsPage = async ({searchParams}: SearchParams) => {

    const filters = await searchParams;

    const subject = filters.subject ? filters.subject : ""
    const topic = filters.topic ? filters.topic : ""

    const companions = await getAllCompanions({subject, topic})

    console.log(companions)

    return (
        <main>
            <section className="flex justify-between gap-4 max-sm:flex-col">
                <h1>Companion Library</h1>
                <div className="flex gap-4">
                    <SearchInput/>
                    <SubjectFilter/>
                </div>
            </section>
            <section className="companions-grid">
                {companions?.map((companions) => (
                    <CompanionCards key={companions.id} {...companions} color={getSubjectColor(companions.subject)}/>
                ))}
            </section>

        </main>
    );
};

export default CompanionsPage;