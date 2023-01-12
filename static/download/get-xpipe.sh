#!/usr/bin/env bash

# This is the bootstrap Unix installer served by `https://get.volta.sh`.
# Its responsibility is to query the system to determine what OS the system
# has, fetch and install the appropriate build of Volta, and modify the user's
# profile.

release_url() {
  echo "https://github.com/xpipe-io/xpipe-app/releases/latest/download/"
}

download_release_from_repo() {
  local os_info="$1"
  local tmpdir="$2"
  local ending=get_file_ending "$os_info"

  local filename="xpipe-installer-$os_info.$ending"
  local download_file="$tmpdir/$filename"
  local archive_url="$(release_url)/$filename"

  curl --progress-bar --show-error --location --fail "$archive_url" --output "$download_file" --write-out "$download_file"
}

info() {
  local action="$1"
  local details="$2"
  command printf '\033[1;32m%12s\033[0m %s\n' "$action" "$details" 1>&2
}

error() {
  command printf '\033[1;31mError\033[0m: %s\n\n' "$1" 1>&2
}

warning() {
  command printf '\033[1;33mWarning\033[0m: %s\n\n' "$1" 1>&2
}

request() {
  command printf '\033[1m%s\033[0m\n' "$1" 1>&2
}

eprintf() {
  command printf '%s\n' "$1" 1>&2
}

bold() {
  command printf '\033[1m%s\033[0m' "$1"
}

# returns the os name to be used in the packaged release
parse_os_info() {
  local uname_str="$1"
  local arch="$(uname -m)"

  case "$uname_str" in
    Linux)
      if [ "$arch" == "x86_64" ]; then
        echo "linux"
      else
        error "Releases for non x64 architectures are not currently supported."
        return 1
      fi
      ;;
    Darwin)
      if [ "$(uname -m)" == "arm64" ]; then
        error "Releases for non x64 architectures are not currently supported."
        return 1
        # echo "macos-aarch64"
      else
        echo "macos"
      fi
      ;;
    *)
      return 1
  esac
  return 0
}

get_file_ending() {
  local uname_str="$1"

  case "$uname_str" in
    Linux)
      local debian=$(test -f "/etc/debian_version")
      if [ "$debian" == 1 ]; then
        echo "deb"
      else
        echo "rpm"
      fi
      ;;
    Darwin)
      echo "pkg"
      ;;
    *)
      exit 1
  esac
}

install() {
  local uname_str="$(uname -s)"
  local file="$1"

  case "$uname_str" in
    Linux)
      local debian=$(test -f "/etc/debian_version")
      if [ "$debian" == 1 ]; then
        sudo apt-get install "$file"
      else
        sudo dnf install "$file"
      fi
      ;;
    Darwin)
      sudo pkg ...
      ;;
    *)
      exit 1
  esac
}

parse_os_pretty() {
  local uname_str="$1"

  case "$uname_str" in
    Linux)
      echo "Linux"
      ;;
    Darwin)
      echo "macOS"
      ;;
    *)
      echo "$uname_str"
  esac
}

download_release() {
  local uname_str="$(uname -s)"
  local os_info
  os_info="$(parse_os_info "$uname_str")"
  if [ "$?" != 0 ]; then
    error "The current operating system ($uname_str) does not appear to be supported."
    return 1
  fi
  local pretty_os_name="$(parse_os_pretty "$uname_str")"

  # store the downloaded archive in a temporary directory
  local download_dir="$(mktemp -d)"
  download_release_from_repo "$os_info" "$download_dir"
}

check_architecture() {
  local arch="$1"
  case "$arch" in
    x86_64)
      return 0
      ;;
    arm64)
      if [ "$(uname -s)" = "Darwin" ]; then
        return 0
      fi
      ;;
  esac

  error "Sorry! X-Pipe currently only provides pre-built binaries for x86_64 architectures."
  return 1
}


# return if sourced (for testing the functions above)
return 0 2>/dev/null

check_architecture "$(uname -m)" || exit 1

download_archive="$(download_release; exit "$?")"
exit_status="$?"
if [ "$exit_status" != 0 ]
then
  error "Could not download X-Pipe version '$version'."
  return "$exit_status"
fi

install "$download_archive"
