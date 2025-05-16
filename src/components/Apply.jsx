import React from 'react';
import Button from '@mui/material/Button';

export default function Apply() {
    return (
        <section className="container mx-auto px-4 py-24 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to start your journey?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-12">
                Join our next cohort and kickstart your career in tech with hands-on learning and expert mentorship.
            </p>
            <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-10 py-6 text-lg">
                Apply now
            </Button>
        </section>
    );
} 