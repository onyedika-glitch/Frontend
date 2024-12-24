import React from 'react';
import MainLayout from '../layouts/MainLayout';
import SkillCheck from '../components/SkillCheck';
import EmailAccess from '../components/EmailAccess';

const HomePage = () => {
    return (
        <MainLayout>
            <h2 className="text-lg font-semibold mb-4">Agent skill</h2>
            <SkillCheck />
            <EmailAccess />
        </MainLayout>
    );
};

export default HomePage;
