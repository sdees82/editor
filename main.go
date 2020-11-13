package main

import (
	"flag"
	"fmt"
	"log"
	"net/http"
	"path/filepath"
)

var (
	addr = flag.String("addr", ":8080", "http service address")
	wdir = flag.String("wdir", "www", "set www directory")
)

func serveHome(w http.ResponseWriter, r *http.Request) {
	log.Println(r.URL)
	if r.Method != "GET" {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}
	http.ServeFile(w, r, filepath.Join(*wdir, r.URL.Path))
}

func main() {
	flag.Parse()
	http.HandleFunc("/", serveHome)
	fmt.Printf("server listening on %q\n", *addr)
	err := http.ListenAndServe(*addr, nil)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}
