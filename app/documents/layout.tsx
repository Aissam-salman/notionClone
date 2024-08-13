import React from 'react';

const DocumentLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <div className={`h-full dark:bg-neutral-800`}>
            <main className={`h-full pt-40`}>{children}</main>
        </div>
    );
};

export default DocumentLayout;
