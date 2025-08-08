import React from 'react';
import ProviderTema from '../Providers/ProviderTema';
import TemasProvider from '../Providers/ProviderTema';

export default function Layout({
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