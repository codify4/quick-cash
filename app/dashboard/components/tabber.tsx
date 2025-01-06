/* Libs */
import { cn } from "@/lib/utils"

/* Components */
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type TabberProps = {
    className?: string
    tabs: {
        label: string
        value: string
        icon: string
        content: React.ReactNode
    }[]
}

const Tabber = ({ className, tabs }: TabberProps) => {
    return (
        <Tabs defaultValue={tabs[0].value} className={cn(
            '',
            className
        )}>
            <TabsList className="w-full justify-around rounded-xl">
                {tabs.map((tab) =>
                    <TabsTrigger
                        className="px-4 w-full rounded-lg"
                        key={tab.value}
                        value={tab.value}
                    >
                        <span className="ml-1 px-1">
                            {tab.label}
                        </span>
                    </TabsTrigger>
                )}
            </TabsList>
            {tabs.map((tab) => <TabsContent key={tab.value} value={tab.value}>{tab.content}</TabsContent>)}
        </Tabs>
    )
}

export default Tabber