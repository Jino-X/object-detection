"use client"

import { useSession } from "next-auth/react"
import Link from "next/link"
import ObjectDetection from "@/components/object-detection"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Camera, AlertTriangle, Users, Lock } from "lucide-react"

export default function Home() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </main>
    )
  }

  if (!session) {
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <Shield className="h-20 w-20 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                ThiefGuard AI
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered security system with real-time object detection and theft prevention
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Camera className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Real-time Detection</CardTitle>
                <CardDescription>
                  Advanced AI models detect objects and potential threats instantly
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <AlertTriangle className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Smart Alerts</CardTitle>
                <CardDescription>
                  Intelligent notification system for suspicious activities
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Lock className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Secure Access</CardTitle>
                <CardDescription>
                  Protected dashboard with user authentication and role management
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="space-y-4">
            <Link href="/login">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Access Security Dashboard
              </Button>
            </Link>
            <p className="text-sm text-gray-500">
              Sign in to start monitoring your premises
            </p>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Security Monitoring
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          AI-powered real-time object detection and theft prevention system
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
          <CardHeader className="text-center pb-4">
            <CardTitle className="flex items-center justify-center space-x-2 text-xl">
              <Camera className="h-6 w-6 text-blue-600" />
              <span>Live Camera Feed</span>
            </CardTitle>
            <CardDescription>
              Real-time object detection with person identification and alert system
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <ObjectDetection />
          </CardContent>
        </Card>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-blue-600" />
                <span>Detection Status</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">System Status</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                    Active
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Detection Mode</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                    Real-time
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Alert System</span>
                  <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">
                    Enabled
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
                <span>Security Info</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm text-gray-600">
                <p>• Person detection triggers audio alerts</p>
                <p>• Red bounding boxes indicate detected persons</p>
                <p>• System monitors continuously for security threats</p>
                <p>• All detections are processed locally for privacy</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
