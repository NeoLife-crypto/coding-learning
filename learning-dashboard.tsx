"use client"

import { useState } from "react"
import { Book, Code, Play, CheckCircle, Circle, ArrowRight, Lightbulb, Target, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Component() {
  const [completedLessons, setCompletedLessons] = useState<number[]>([])

  const toggleLesson = (lessonId: number) => {
    setCompletedLessons((prev) =>
      prev.includes(lessonId) ? prev.filter((id) => id !== lessonId) : [...prev, lessonId],
    )
  }

  const learningPaths = [
    {
      id: 1,
      title: "Web Development",
      description: "Learn HTML, CSS, JavaScript, and React",
      duration: "3-6 months",
      difficulty: "Beginner",
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "Python Programming",
      description: "Start with Python basics and data science",
      duration: "2-4 months",
      difficulty: "Beginner",
      color: "bg-green-500",
    },
    {
      id: 3,
      title: "Mobile Development",
      description: "Build iOS and Android apps",
      duration: "4-8 months",
      difficulty: "Intermediate",
      color: "bg-purple-500",
    },
  ]

  const weeklyPlan = [
    {
      id: 1,
      week: "Week 1",
      title: "Programming Fundamentals",
      lessons: [
        { id: 1, title: "What is Programming?", duration: "15 min" },
        { id: 2, title: "Setting Up Your Environment", duration: "30 min" },
        { id: 3, title: "Your First Program", duration: "45 min" },
        { id: 4, title: "Variables and Data Types", duration: "60 min" },
      ],
    },
    {
      id: 2,
      week: "Week 2",
      title: "Control Structures",
      lessons: [
        { id: 5, title: "Conditional Statements", duration: "45 min" },
        { id: 6, title: "Loops and Iteration", duration: "60 min" },
        { id: 7, title: "Functions Basics", duration: "75 min" },
        { id: 8, title: "Practice Project", duration: "90 min" },
      ],
    },
    {
      id: 3,
      week: "Week 3",
      title: "Data Structures",
      lessons: [
        { id: 9, title: "Arrays and Lists", duration: "60 min" },
        { id: 10, title: "Objects and Dictionaries", duration: "60 min" },
        { id: 11, title: "Working with Data", duration: "75 min" },
        { id: 12, title: "Mini Project", duration: "120 min" },
      ],
    },
  ]

  const resources = [
    {
      category: "Interactive Platforms",
      items: [
        { name: "freeCodeCamp", description: "Free coding bootcamp with certificates" },
        { name: "Codecademy", description: "Interactive coding lessons" },
        { name: "Khan Academy", description: "Computer programming courses" },
      ],
    },
    {
      category: "Practice Platforms",
      items: [
        { name: "LeetCode", description: "Coding challenges and interview prep" },
        { name: "HackerRank", description: "Programming challenges" },
        { name: "Codewars", description: "Coding kata and challenges" },
      ],
    },
    {
      category: "Documentation",
      items: [
        { name: "MDN Web Docs", description: "Web development documentation" },
        { name: "W3Schools", description: "Web development tutorials" },
        { name: "Stack Overflow", description: "Programming Q&A community" },
      ],
    },
  ]

  const totalLessons = weeklyPlan.reduce((acc, week) => acc + week.lessons.length, 0)
  const progressPercentage = (completedLessons.length / totalLessons) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Start Your Coding Journey</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn programming step by step with our structured approach. From complete beginner to building real
            projects.
          </p>
        </div>

        {/* Progress Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-yellow-500" />
              Your Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span>Lessons Completed</span>
                <span>
                  {completedLessons.length} / {totalLessons}
                </span>
              </div>
              <Progress value={progressPercentage} className="h-2" />
              <div className="flex justify-between text-xs text-gray-500">
                <span>Just getting started!</span>
                <span>{Math.round(progressPercentage)}% Complete</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="path" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="path">Learning Paths</TabsTrigger>
            <TabsTrigger value="weekly">Weekly Plan</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="tips">Tips</TabsTrigger>
          </TabsList>

          {/* Learning Paths */}
          <TabsContent value="path" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              {learningPaths.map((path) => (
                <Card key={path.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className={`w-12 h-12 ${path.color} rounded-lg flex items-center justify-center mb-4`}>
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>{path.title}</CardTitle>
                    <CardDescription>{path.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Duration:</span>
                        <span>{path.duration}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Difficulty:</span>
                        <Badge variant="secondary">{path.difficulty}</Badge>
                      </div>
                      <Button className="w-full">
                        Start Learning
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Weekly Plan */}
          <TabsContent value="weekly" className="space-y-6">
            {weeklyPlan.map((week) => (
              <Card key={week.id}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-blue-500" />
                    {week.week}: {week.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {week.lessons.map((lesson) => (
                      <div
                        key={lesson.id}
                        className="flex items-center justify-between p-3 rounded-lg border hover:bg-gray-50 cursor-pointer"
                        onClick={() => toggleLesson(lesson.id)}
                      >
                        <div className="flex items-center gap-3">
                          {completedLessons.includes(lesson.id) ? (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          ) : (
                            <Circle className="h-5 w-5 text-gray-400" />
                          )}
                          <div>
                            <h4 className="font-medium">{lesson.title}</h4>
                            <p className="text-sm text-gray-500">{lesson.duration}</p>
                          </div>
                        </div>
                        <Button size="sm" variant="ghost">
                          <Play className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Resources */}
          <TabsContent value="resources" className="space-y-6">
            {resources.map((category) => (
              <Card key={category.category}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Book className="h-5 w-5 text-purple-500" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.items.map((item) => (
                      <div key={item.name} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                        <h4 className="font-semibold mb-2">{item.name}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Tips */}
          <TabsContent value="tips" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-yellow-500" />
                    Getting Started Tips
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-semibold text-blue-600">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Start Small</h4>
                        <p className="text-sm text-gray-600">
                          Begin with simple programs and gradually increase complexity
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-semibold text-blue-600">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Practice Daily</h4>
                        <p className="text-sm text-gray-600">
                          Consistency is key - even 30 minutes daily makes a difference
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-semibold text-blue-600">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Build Projects</h4>
                        <p className="text-sm text-gray-600">Apply what you learn by building real projects</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-green-500" />
                    Success Strategies
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 rounded-lg">
                      <h4 className="font-medium text-green-800">Don't Rush</h4>
                      <p className="text-sm text-green-700">Take time to understand concepts before moving on</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <h4 className="font-medium text-blue-800">Ask Questions</h4>
                      <p className="text-sm text-blue-700">Join communities and don't hesitate to ask for help</p>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <h4 className="font-medium text-purple-800">Debug Mindset</h4>
                      <p className="text-sm text-purple-700">Embrace errors as learning opportunities</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
