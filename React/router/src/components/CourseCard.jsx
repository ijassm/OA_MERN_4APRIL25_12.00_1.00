export const CourseCard = ({ course }) => {

    return (
        <main className='text-xl my-6 bg-gray-100'>
            <img className='w-full object-cover' src={course.image} alt="js" />
            <article className="p-5">
                <h1 className="text-2xl font-bold my-5">{course.title}</h1>
                <p className='my-2 max-w-2xl text-ellipsis line-clamp-3'>
                    {course.description}
                </p>
                <p className='my-2 max-w-2xl'>
                    <strong>Duration:</strong> {course.duration}
                </p>
                <p className='my-2 max-w-2xl'>
                    <strong>Price:</strong> {course.price}
                </p>
                <p className='my-2 max-w-2xl'>
                    <strong>Instructor:</strong> {course.instructor}
                </p>
                <a href="https://www.udemy.com/course/the-complete-javascript-course/" target="_blank" rel="noopener noreferrer" className='inline-block bg-blue-500 text-white px-4 py-2 rounded my-2'>Enroll Now</a>
            </article>

        </main>
    )
}
