import WritingsPage from '@/components/Writings/WritingsPage'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Writing | Kush Chaudhary",
  description: "Writings I have",
};

export default function page() {
  return (
    <div>
      <WritingsPage/>
    </div>
  )
}
