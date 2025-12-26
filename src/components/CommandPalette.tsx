import React from 'react'
import { Button } from './ui/button'
import { ALargeSmall, Copy, Pencil, Scissors, SquareChartGanttIcon, TypeIcon } from 'lucide-react'

const palette = [
    {
        icon: <SquareChartGanttIcon className='size-5'/>,
        action: 'Create Task'
    },
    {
        icon: <Pencil className='size-5'/>,
        action: 'Edit Task'
    },
    {
        icon: <Scissors className='-rotate-90 size-5' />,
        action: 'Delete Task'
    },
    {
        icon: <TypeIcon className='size-5'/>,
        action: 'Create Note'
    },
    {
        icon: <ALargeSmall className='size-5'/>,
        action: 'Create Note'
    }
]


const CommandPalette = () => {
  return (
    <div className="flex shadow-xl p-2 fixed rounded-3xl top-1/2 left-5 -translate-y-1/2 bg-neutral-900/70">
      <div className="flex flex-col gap-2">
        {palette.map((action, index) => (
          <Button key={index} size={"icon-lg"} variant={"ghost"} className="rounded-xl shadow p-2">
            {action.icon}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default CommandPalette