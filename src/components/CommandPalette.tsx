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
        action: 'Modify Case'
    }
]


const CommandPalette = () => {
  return (
    /* top-1/2 left-9 -translate-y-1/2 */
    <div className='h-full flex items-center justify-center px-9'>
    <div className="flex shadow-xl p-2 rounded-3xl bg-neutral-900/60">
      <div className="flex flex-col gap-2">
        {palette.map((item, index) => (
            <Button key={index} size={"icon-lg"} variant={"ghost"} className="rounded-2xl shadow p-5.5 transition-all">
            {item.icon}
          </Button>
        ))}
      </div>
    </div>
        </div>
  );
}

export default CommandPalette