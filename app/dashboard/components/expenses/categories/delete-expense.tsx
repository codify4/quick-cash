import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Trash2 } from "lucide-react"
import { deleteExpense } from "@/actions/expenses"
import { useState } from "react"

interface DeleteExpenseProps {
    id?: number
    onClose?: () => void
}

const DeleteExpense = ({ id, onClose }: DeleteExpenseProps) => {
    const [open, setOpen] = useState(false)

    const handleDelete = async () => {
        if (!id) return
        await deleteExpense(id)
        setOpen(false)
        onClose?.()
    }

    return (
        <Dialog open={open} onOpenChange={(value) => {
            setOpen(value)
            if (!value) onClose?.()
        }}>
            <DialogTrigger asChild>
                <div className="flex items-center gap-2 cursor-pointer" onClick={(e) => e.stopPropagation()}>
                    <Trash2 className="h-4 w-4" />
                    Delete
                </div>
            </DialogTrigger>
            <DialogContent className="w-11/12 rounded-2xl" onClick={(e) => e.stopPropagation()}>
                <DialogHeader>
                    <DialogTitle className="text-xl font-semibold tracking-tight">
                        Delete this Expense
                    </DialogTitle>
                    <DialogDescription>
                        Are you sure you want to delete this expense? This action cannot be undone.
                    </DialogDescription>
                </DialogHeader>
                <form action={handleDelete} className="space-y-4" onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center justify-end w-full space-x-2">
                        <Button type="submit" className="w-full text-white bg-primary/80 rounded-lg">
                            Delete
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default DeleteExpense