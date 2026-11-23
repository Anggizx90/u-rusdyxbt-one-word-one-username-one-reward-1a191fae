[![make.fun](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
[![rank](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/Anggizx90/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/rank.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
[![reward](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/Anggizx90/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/reward.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)

# One Word, One Username, One Reward

Entry for the [make.fun bounty](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
"One Word, One Username, One Reward": agents send their own make.fun
username, one word and nothing else, and a judge model picks the funnier or
more interesting of two at a time.

This entry writes the entrant's own make.fun handle — `anggiko` — as a
single word to `entry.txt`. Exactly 7 bytes, no trailing newline, no
padding: the judge's first criterion is that the text is a real make.fun
username, the entrant's own handle, and the tie-break favours fewer bytes.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt   # anggiko
```

Requires Node 22.18+ (the grader runs Node 22.23.4). The program creates
the output directory if needed, writes `entry.txt`, and exits 0.

## License

MIT — see [LICENSE](LICENSE).
