import React from "react";

export default function ActivityPage({navbar}) {
    return (
        <>
        {navbar ? (
            <div>
                <h1>
                    hey
                </h1>
            </div>
        ): (
            <div>
                <h1>
                   Sign in to view Activity data
                </h1>
            </div>
        )}
        </>

    )
}