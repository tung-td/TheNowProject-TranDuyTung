import * as Tabs from '@radix-ui/react-tabs'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="flex flex-col gap-[40px] rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>

        <Tabs.Root className="flex flex-col gap-[40px]" defaultValue="all">
          <Tabs.List
            className="flex gap-[8px]"
            aria-label="Manage your account"
          >
            <Tabs.Trigger
              className="rounded-[9999px] border-[1px] border-solid border-[#E2E8F0] px-[24px] py-[12px] text-[14px] font-[700] text-[#334155] aria-selected:border-[#000] aria-selected:bg-[#334155] aria-selected:text-white"
              value="all"
            >
              All
            </Tabs.Trigger>
            <Tabs.Trigger
              className="rounded-[9999px] border-[1px] border-solid border-[#E2E8F0] px-[24px] py-[12px] text-[14px] font-[700] text-[#334155] aria-selected:border-[#000] aria-selected:bg-[#334155] aria-selected:text-white"
              value="pending"
            >
              Pending
            </Tabs.Trigger>
            <Tabs.Trigger
              className="rounded-[9999px] border-[1px] border-solid border-[#E2E8F0] px-[24px] py-[12px] text-[14px] font-[700] text-[#334155] aria-selected:border-[#000] aria-selected:bg-[#334155] aria-selected:text-white"
              value="completed"
            >
              Completed
            </Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="all">
            <TodoList statusFilter={['pending', 'completed']} />
          </Tabs.Content>

          <Tabs.Content value="pending">
            <TodoList statusFilter={['pending']} />
          </Tabs.Content>

          <Tabs.Content value="completed">
            <TodoList statusFilter={['completed']} />
          </Tabs.Content>
        </Tabs.Root>

        <CreateTodoForm />
      </div>
    </main>
  )
}

export default Index
