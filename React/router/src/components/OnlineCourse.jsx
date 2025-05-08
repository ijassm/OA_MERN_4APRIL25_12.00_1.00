import React from 'react'
import { CourseCard } from './CourseCard'
import { onlineCourses } from '../constants/courses'

export function OnlineCourse() {
    return (
        <main className="flex gap-4 flex-wrap md:flex-nowrap">
            {
                onlineCourses.map((course) => <CourseCard course={course} />)
            }
        </main>
    )
}