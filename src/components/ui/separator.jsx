import React from "react";

             export function Separator({ className = "" }) {
               return (
                 <hr
                   className={`border-neutral-200 ${className}`}
                 />
               );
             }