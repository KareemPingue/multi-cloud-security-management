# opa build -t wasm -e example/allow example.rego
# paste the above into bash console when in the '../backend/policies/' directory.

package example

allow if {
    input.method == "GET"
}

deny if {
    input.method == "POST"
}

