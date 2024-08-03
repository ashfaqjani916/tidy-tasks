import { useRef, useEffect } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from './ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form'
import { Input } from './ui/input'

import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'

import { cn } from '../lib/utils'

import { Calendar } from './ui/calendar'
import { Textarea } from './ui/textarea'
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { v4 as uuidv4 } from 'uuid'
import tasks from "../db/tasks.json"

interface Task {
  id: string;
  taskname: string;
  description: string;
  due: string;
  category: string;
}

// const tasksData: Task[] = tasks as Task[];

// import { toast } from './ui/use-toast'

const formSchema = z.object({
  taskname: z.string().min(2, {
    message: 'Task name must be at least 2 characters.',
  }),
  due: z.date({
    required_error: 'Due date is required.',
  }),
  description: z
    .string()
    .min(10, {
      message: 'Bio must be at least 10 characters.',
    })
    .max(160, {
      message: 'Bio must not be longer than 30 characters.',
    }),
  category: z.string(),
})

const InpDialog = (state: any) => {
  const inpRef = useRef<HTMLInputElement>(null)

  // const [name, setName] = useState('')
  // const [description, setDescription] = useState('')
  // const [date, setDate] = useState('')
  // const [category, setCategory] = useState('')

  useEffect(() => {
    inpRef.current?.focus()
  }, [])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      taskname: '',
      description: '',
      category: '',
    },
  })

  const updateTasksJson = async () => {
    // // Convert tasks array to JSON string
    // const tasksJson = JSON.stringify(tasks);

    // // Write tasks JSON string to the tasks.json file
    // // You can use any method or library to write the file, such as fs.writeFile in Node.js
    // // Here's an example using the browser's File System API:
    // const fileHandle = await 
    // const writable = await fileHandle.createWritable();
    // await writable.write(tasksJson);
    // await writable.close();
  };



  //  submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    let task: Task = {
      id: uuidv4(),
      taskname: values.taskname,
      description: values.description,
      due: values.due as unknown as string,
      category: values.category,
    }

    tasks.tasks.push(task);
    updateTasksJson();
    console.log(tasks);
    state.state()

  }
  return (
    <>
      <div className="border rounded-lg shadow-md p-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="taskname"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="New Task" {...field} ref={inpRef} className=" border-none focus:border-none" />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormControl className="border-none">
                    <Textarea placeholder="Tell us a little bit about your task" className="resize-none" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-between">
              <div className="flex gap-6">
                <FormField
                  control={form.control}
                  name="due"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button variant={'outline'} className={cn('w-[240px] pl-3 text-left font-normal', !field.value && 'text-muted-foreground')}>
                              {field.value ? format(field.value, 'PPP') : <span>Due date</span>}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar mode="single" selected={field.value} onSelect={field.onChange} disabled={(date) => date < new Date() || date < new Date('1900-01-01')} initialFocus />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="w-[150px]">
                            <SelectValue placeholder="Category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="m@example.com">m@example.com</SelectItem>
                          <SelectItem value="m@google.com">m@google.com</SelectItem>
                          <SelectItem value="m@support.com">m@support.com</SelectItem>
                        </SelectContent>
                      </Select>

                      <FormMessage />
                    </FormItem>
                  )}
                /> */}
              </div>
              <div className='flex gap-5'>

                <Button type="submit" className="mr-5">
                  Add
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </>
  )
}

export default InpDialog
