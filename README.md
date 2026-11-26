
# Max Profit Problem

EverQuint Interview Assignment – Task 3

## Overview

This project calculates the maximum possible earnings
from developing theatres, pubs and commercial parks
within a given number of time units.

Only one property can be constructed at a time.

## Property Details

| Property | Build Time | Earnings per Time Unit |
|----------|------------|------------------------|
| Theatre | 5 | $1500 |
| Pub | 4 | $1000 |
| Commercial Park | 10 | $2000 |

## Technology

- JavaScript
- Node.js
- Built-in Node.js test runner
- No external dependencies

## How to Run

```bash
node solution.js 7
```

Replace 7 with any non-negative integer.

## Run Tests

```bash
npm test
```

## Expected Results

| Time | Maximum Earnings | Optimal Combination |
|------|------------------|---------------------|
| 7 | $3000 | One theatre or one pub |
| 8 | $4500 | One theatre |
| 13 | $16500 | Two theatres |

## Algorithm

The solution uses bottom-up dynamic programming.

For each available time unit, the algorithm evaluates
every possible property as the first construction.

The earnings from that property are added to the
optimal earnings for the remaining construction time.

All distinct combinations producing the maximum
earnings are retained.

## Recurrence

DP(t) = max of:

- 0
- 1500 * (t - 5) + DP(t - 5)
- 1000 * (t - 4) + DP(t - 4)
- 2000 * (t - 10) + DP(t - 10)

Only feasible construction choices are considered.

## Complexity

Computing maximum earnings alone requires O(n) time
and O(n) space.

Retaining all optimal combinations introduces additional
time and storage proportional to the combinations stored
and processed.

## Assumptions

- Time is a non-negative integer.
- Land availability is unlimited.
- Buildings generate revenue after construction.
- Construction cannot occur in parallel.
- Construction costs are not specified.
- Buildings with zero operational time are excluded.
