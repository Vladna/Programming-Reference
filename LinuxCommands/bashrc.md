# Bashrc helpful enhancements
## Shortcut for moving backwards in directories 
b() {
    local dir=""
    local arg=""
    for ((i=1;i<=$1;i++)); do
        dir="../$dir"
    done
    arg=${dir%/}
    cd "$arg" || exit
}
