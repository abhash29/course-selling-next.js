"use client";

import { Card, CardContent } from "@/components/ui/card";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface signinLayoutProps{
    name: string;
    onClick: (email: string, password: string) => void;
}

export default function CenteredComponent(props:signinLayoutProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        console.log("Submit button is clicked");
        console.log(email);
        console.log(password);
    }

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <Card className="w-full max-w-sm border border-gray-300 shadow-lg p-6 rounded-2xl bg-white">
                <CardContent className="flex flex-col gap-4">
                    <h2 className="text-xl font-semibold text-center">{props.name} Page</h2>
                    <Input placeholder="email" className="border-gray-300" value={email} onChange={handleEmailChange} />
                    <Input placeholder="password" className="border-gray-300" value={password} onChange={handlePasswordChange} />
                    <Button  className="w-full" onClick={async () =>{props.onClick(email, password)} }>Submit</Button>
                </CardContent>
            </Card>
        </div>
    );
}