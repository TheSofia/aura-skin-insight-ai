
import { useState } from "react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TimelineCapture {
  url: string;
  timestamp: Date;
  period: string;
}

interface SkinTimelineProps {
  captures: TimelineCapture[];
}

const SkinTimeline = ({ captures }: SkinTimelineProps) => {
  const [filter, setFilter] = useState<"all" | "morning" | "afternoon" | "evening">("all");
  
  // Group captures by date
  const capturesByDate = captures.reduce<Record<string, TimelineCapture[]>>((acc, capture) => {
    const dateKey = format(capture.timestamp, 'yyyy-MM-dd');
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    acc[dateKey].push(capture);
    return acc;
  }, {});
  
  // Sort dates newest to oldest
  const sortedDates = Object.keys(capturesByDate).sort((a, b) => 
    new Date(b).getTime() - new Date(a).getTime()
  );
  
  // Filter captures by period
  const filteredDates = sortedDates.map(date => {
    if (filter === "all") {
      return { date, captures: capturesByDate[date] };
    }
    return {
      date,
      captures: capturesByDate[date].filter(c => c.period === filter)
    };
  }).filter(group => group.captures.length > 0);
  
  return (
    <Card className="glass h-full">
      <div className="p-6 border-b">
        <h2 className="text-xl font-light tracking-wider mb-4">Your Skin Timeline</h2>
        <div className="flex space-x-2">
          <Button 
            variant={filter === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("all")}
            className="biomorphic-button"
          >
            All
          </Button>
          <Button 
            variant={filter === "morning" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("morning")}
            className="biomorphic-button"
          >
            Morning
          </Button>
          <Button 
            variant={filter === "afternoon" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("afternoon")}
            className="biomorphic-button"
          >
            Afternoon
          </Button>
          <Button 
            variant={filter === "evening" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("evening")}
            className="biomorphic-button"
          >
            Evening
          </Button>
        </div>
      </div>
      
      <ScrollArea className="h-[550px] p-6">
        {captures.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[400px] text-center p-4">
            <div className="w-16 h-16 rounded-full bg-beautyagent-light-grey flex items-center justify-center mb-4">
              <span className="text-2xl">📸</span>
            </div>
            <h3 className="text-lg font-medium mb-2">No captures yet</h3>
            <p className="text-beautyagent-medium-grey max-w-xs">
              Take your first skin capture to start tracking your skin journey.
              We recommend capturing 3 times daily for best results.
            </p>
          </div>
        ) : (
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-4 top-2 bottom-0 w-0.5 bg-gradient-to-b from-beautyagent-rose-quartz to-beautyagent-ultraviolet-light animate-gradient"></div>
            
            <div className="space-y-8 ml-2">
              {filteredDates.map(({ date, captures }) => (
                <div key={date} className="ml-8 relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-10 top-0 w-4 h-4 rounded-full bg-beautyagent-rose-quartz z-10 breathing"></div>
                  
                  <h3 className="text-lg font-medium mb-3">
                    {format(new Date(date), 'MMMM d, yyyy')}
                  </h3>
                  
                  <div className="grid gap-4">
                    {captures.map((capture, idx) => (
                      <div 
                        key={`${date}-${capture.period}-${idx}`}
                        className="p-4 bg-white rounded-lg border border-beautyagent-light-grey hover:shadow-md transition-all duration-300"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-beautyagent-ultraviolet capitalize">
                            {capture.period}
                          </span>
                          <span className="text-xs text-beautyagent-medium-grey">
                            {format(new Date(capture.timestamp), 'h:mm a')}
                          </span>
                        </div>
                        
                        <div className="aspect-video rounded-md overflow-hidden">
                          <img 
                            src={capture.url} 
                            alt={`Skin capture - ${capture.period}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </ScrollArea>
    </Card>
  );
};

export default SkinTimeline;
