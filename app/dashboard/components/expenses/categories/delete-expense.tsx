import { deleteExpense } from "@/actions/expenses"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Trash2 } from "lucide-react"

const DeleteExpense = ({id}: {id?: number}) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="flex items-center gap-2 cursor-pointer" onClick={(e) => e.stopPropagation()}>
                    <Trash2 className="h-4 w-4" />
                    Delete
                </div>
            </DialogTrigger>
            <DialogContent className="w-11/12 rounded-2xl">
                <DialogHeader>
                    <DialogTitle className="text-xl font-semibold tracking-tight">
                        Delete this Expense
                    </DialogTitle>
                    <DialogDescription>
                        Are you sure you want to delete this expense?
                    </DialogDescription>
                </DialogHeader>
                <form action={async () => await deleteExpense(id!)} className="space-y-4">
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