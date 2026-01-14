"use client"
import Link from 'next/link';
import React from 'react';
import { TbFaceIdError } from 'react-icons/tb';

const error = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center gap-4">
      <TbFaceIdError size={100} className="text-primary" />
      <h2 className="text-4xl font-semibold">Something went wrong!</h2>
      <Link href={"/"} className="btn btn-primary btn-outline">
        Go Home
      </Link>
    </div>
  );
};

export default error;