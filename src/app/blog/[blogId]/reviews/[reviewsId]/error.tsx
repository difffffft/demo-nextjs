"use client"

/**
 * 试着访问 /blog/1/reviews/10
 * @returns 
 */
export default function ErrorBoundary({ error, reset }: {
    error: Error,
    reset: () => void
}) {
    return (
        <div>没有找到评论 {error.message} <br />
            <button onClick={reset}>重试</button>
        </div>
    )
}