import React from 'react'
import { FcGoogle } from 'react-icons/fc'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

const page = () => {
  return (
    <div className="flex flex-col border-slate-100 items-center h-[100vh] justify-center">
      <div>
        <Avatar style={{ height: '150px', width: '150px' }}>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>

      <div className="text-[50px] font-custom text-[var(--text-color)]">
        <h1>Task Tide</h1>
      </div>

      <div className="input">
        <Card style={{ width: '300px', height: '300px' }}>
          <CardHeader>
            <CardTitle>Login</CardTitle>
          </CardHeader>
          <CardContent>
            <Input type="text" placeholder="Username" />
          </CardContent>
          <CardContent>
            <Input type="password" placeholder="Password" />
          </CardContent>
          <CardContent className="flex gap-5 items-center justify-center">
            <Link className="hover:underline" href="/signup">
              {' '}
              SignUp
            </Link>
            <Button>Login</Button>
          </CardContent>
          <CardContent className=" flex justify-center ">
            <Button className="bg-transparent h-10 gap-3">
              <FcGoogle size={30} />
              Login with Google
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default page
