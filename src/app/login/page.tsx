import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const page = () => {
  return (
    <div className="flex flex-col border-slate-100 align-middle justify-center">
      <div>
        <Avatar style={{ height: '150px', width: '150px' }}>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>

      <div className="text-[50px] text-[var(--text-color)]">
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
          <CardContent>
            <Button>Login</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default page
