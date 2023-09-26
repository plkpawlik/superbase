"use client";

// @next
import { redirect } from "next/navigation";

// @root
import { useAuthContext } from "@/contexts/auth";

export default function () {
	// component hooks
	const authCtx = useAuthContext();

	// component layout
	if (!!authCtx.user) {
		return redirect("/home/ledgers");
	} else {
		return redirect("/auth/sign-in");
	}
}
