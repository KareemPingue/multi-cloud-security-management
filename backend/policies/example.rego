package example

import data.example.allow

deny if {
	input.role == "user"
}
