import React from "react";


export default function NutritionPage({navbar}) {
    return (
        <>
        {navbar ? (
            <div>
                <h1>
                    Nutrition Page Coming Soon....
                </h1>
            </div>
        ): (
            <div>
                <h1>
                   Sign in to view Nutrition data
                </h1>
            </div>
        )}
        </>


    )

}
