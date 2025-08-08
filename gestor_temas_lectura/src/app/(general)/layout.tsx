import React from 'react';
import TemasProvider from '../Providers/ProviderTema';

export default function GeneralLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <TemasProvider>
                {children}
            </TemasProvider>
        </div>
    )
}