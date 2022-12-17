#!/bin/sh

PWD=$(pwd)
SESSION=$(basename "$PWD")

tmux new-session -s "$SESSION" -d

tmux split-window -v -t "$SESSION"
tmux select-layout even-vertical   # to avoid 'no space for new pane' 
tmux split-window -v -t "$SESSION"
tmux select-layout even-vertical   # to avoid 'no space for new pane' 
tmux split-window -v -t "$SESSION" 
tmux select-layout even-vertical   # to avoid 'no space for new pane' 
tmux split-window -v -t "$SESSION" 
tmux select-layout even-vertical   # to avoid 'no space for new pane' 

tmux send-keys -t "$SESSION:0.0" '(cd gqlgen && gow -e=gql run github.com/99designs/gqlgen generate)' C-m
tmux send-keys -t "$SESSION:0.1" '(cd gqlgen && gow -e=go,json run server.go)' C-m
tmux send-keys -t "$SESSION:0.1" '(cd next && npm run dev)' C-m

# open editors
tmux send-keys -t "$SESSION:0.2" '(cd gqlgen && code .)' C-m
tmux send-keys -t "$SESSION:0.2" '(cd next && code .)' C-m

tmux attach -t "$SESSION"
