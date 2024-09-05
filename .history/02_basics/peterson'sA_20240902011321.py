class Process:
    def __init__(self, pid, arrival_time, burst_time):
        self.pid = pid
        self.arrival_time = arrival_time
        self.burst_time = burst_time
        self.completion_time = 0
        self.turn_around_time = 0
        self.waiting_time = 0

def round_robin(processes, time_quantum):
    current_time = 0
    complete = 0
    n = len(processes)
    remaining_burst_time = [p.burst_time for p in processes]
    ready_queue = []
    running_queue = []

    while complete < n:
        for i, process in enumerate(processes):
            if process.arrival_time <= current_time and remaining_burst_time[i] > 0:
                ready_queue.append(process.pid)
                running_queue.append(process.pid)
                
                if remaining_burst_time[i] > time_quantum:
                    current_time += time_quantum
                    remaining_burst_time[i] -= time_quantum
                else:
                    current_time += remaining_burst_time[i]
                    process.completion_time = current_time
                    process.turn_around_time = process.completion_time - process.arrival_time
                    process.waiting_time = process.turn_around_time - process.burst_time
                    remaining_burst_time[i] = 0
                    complete += 1

                ready_queue.remove(process.pid)

    avg_turnaround_time = sum(p.turn_around_time for p in processes) / n
    avg_waiting_time = sum(p.waiting_time for p in processes) / n

    return avg_turnaround_time, avg_waiting_time, running_queue

def print_processes(processes):
    print("Process ID | Arrival Time | Burst Time | Completion Time | Turnaround Time | Waiting Time")
    for p in processes:
        print(f"    {p.pid}      |      {p.arrival_time}       |     {p.burst_time}     |       {p.completion_time}        |       {p.turn_around_time}       |      {p.waiting_time}")

# Initialize processes
process_list = [
    Process(1, 0, 10),
    Process(2, 1, 4),
    Process(3, 2, 5),
    Process(4, 3, 3),
    Process(5, 4, 1)
]

# Define time quantum
time_quantum = 2

# Run Round Robin scheduling
avg_turnaround_time, avg_waiting_time, running_queue = round_robin(process_list, time_quantum)

# Print results
print_processes(process_list)
print(f"\nAverage Turnaround Time: {avg_turnaround_time:.2f}")
print(f"Average Waiting Time: {avg_waiting_time:.2f}")
print(f"\nRunning Queue: {running_queue}")