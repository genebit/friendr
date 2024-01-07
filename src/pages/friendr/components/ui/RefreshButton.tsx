import { Button } from "@components/ui"
import React from "react"
import { RotateCw } from "react-feather"

interface ComponentProps {
  onRefresh: () => void
  isLoading: boolean
}

const RefreshButton: React.FC<ComponentProps> = ({ onRefresh, isLoading }) => {
  return (
    <>
      <Button onClick={onRefresh} className="w-16 h-16 mx-auto rounded-full">
        <RotateCw size={18} className={isLoading ? "animate-spin" : ""} />
      </Button>
    </>
  )
}

export default RefreshButton
