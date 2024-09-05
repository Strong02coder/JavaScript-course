# class Process:
#     def __init__(self, pid, arrival_time, burst_time):
#         self.pid = pid
#         self.arrival_time = arrival_time
#         self.burst_time = burst_time
#         self.completion_time = 0
#         self.turn_around_time = 0
#         self.waiting_time = 0

# def round_robin(processes, time_quantum):
#     n = len(processes)
#     remaining_burst_time = [p.burst_time for p in processes]
#     current_time = 0
#     complete = 0
#     ready_queue = []
#     running_queue = []
#     avg_turnaround_time = 0
#     avg_waiting_time = 0

#     while complete < n:
#         for i in range(n):
#             if processes[i].arrival_time <= current_time and remaining_burst_time[i] > 0:
#                 ready_queue.append(processes[i].pid)  # Add process to ready queue
#                 if remaining_burst_time[i] > time_quantum:
#                     running_queue.append(processes[i].pid)  # Add process to running queue
#                     current_time += time_quantum
#                     remaining_burst_time[i] -= time_quantum
#                 else:
#                     running_queue.append(processes[i].pid)  # Add process to running queue
#                     current_time += remaining_burst_time[i]
#                     processes[i].completion_time = current_time
#                     processes[i].turn_around_time = processes[i].completion_time - processes[i].arrival_time
#                     processes[i].waiting_time = processes[i].turn_around_time - processes[i].burst_time
#                     remaining_burst_time[i] = 0
#                     complete += 1

#     # Calculate averages
#     total_turnaround_time = sum(p.turn_around_time for p in processes)
#     total_waiting_time = sum(p.waiting_time for p in processes)
#     avg_turnaround_time = total_turnaround_time / n
#     avg_waiting_time = total_waiting_time / n

#     return avg_turnaround_time, avg_waiting_time, ready_queue, running_queue

# def print_processes(processes):
#     print("Process ID | Arrival Time | Burst Time | Completion Time | Turnaround Time | Waiting Time")
#     for p in processes:
#         print(f"    {p.pid}      |      {p.arrival_time}       |     {p.burst_time}     |       {p.completion_time}        |       {p.turn_around_time}       |      {p.waiting_time}")

# # Initialize the processes
# process_list = [
#     Process(1, 0, 10),
#     Process(2, 1, 4),
#     Process(3, 2, 5),
#     Process(4, 3, 3),
#     Process(5, 4, 1)
# ]

# # Define the time quantum
# time_quantum = 2

# # Run the Round Robin scheduling
# avg_turnaround_time, avg_waiting_time, ready_queue, running_queue = round_robin(process_list, time_quantum)

# # Print the result
# print_processes(process_list)

# # Print averages
# print(f"\nAverage Turnaround Time: {avg_turnaround_time:.2f}")
# print(f"Average Waiting Time: {avg_waiting_time:.2f}")

# # Print Ready and Running Queue
# print(f"\nReady Queue: {ready_queue}")
# print(f"Running Queue: {running_queue}")