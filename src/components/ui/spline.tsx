"use client"

import React, { Suspense, lazy } from "react"
const Spline = lazy(() => import("@splinetool/react-spline"))

interface SplineSceneProps {
	scene: string
	className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
	return (
		<Suspense
			fallback={
				<div className="w-full h-full flex items-center justify-center">
					<span className="loader" />
				</div>
			}
		>
			{/* @ts-ignore - runtime provides the default export */}
			<Spline scene={scene} className={className} />
		</Suspense>
	)
}

export default SplineScene
