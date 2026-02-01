"use client";

import React, { useEffect, useState } from "react";
import { Dialog } from "@/components/ui/dialog/dialog";
import { DialogContent } from "@/components/ui/dialog/dialogContent";
import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/cardContent";
import { DialogHeader } from "@/components/ui/dialog/dialogHeader";
import { DialogTitle } from "@/components/ui/dialog/dialogTitle";
import { DialogDescription } from "@/components/ui/dialog/dialogDescription";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/Button";


export default function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const saved = document.cookie
      .split("; ")
      .find((row) => row.startsWith("cookiePrefs="));
    if (saved) {
      try {
        const prefs = JSON.parse(decodeURIComponent(saved.split("=")[1]));
        setPreferences(prefs);
        setOpen(false);
      } catch {
        setOpen(true);
      }
    } else {
      setOpen(true);
    }
  }, []);

  const savePreferences = (prefs) => {
    document.cookie = `cookiePrefs=${encodeURIComponent(
      JSON.stringify(prefs)
    )}; path=/; max-age=${60 * 60 * 24 * 180}`; // 180 days expressed in seconds
    setPreferences(prefs);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-lg w-full p-6">
        <DialogHeader>
          <DialogTitle>Cookie Preferences</DialogTitle>
          <DialogDescription>
            Manage your cookie settings below.
          </DialogDescription>
        </DialogHeader>
        <Separator className="my-4" />
        <Card>
          <CardContent>
            <div className="flex items-center justify-between py-2">
              <Label>Essential Cookies</Label>
              <Switch checked={preferences.essential} disabled />
            </div>
            <div className="flex items-center justify-between py-2">
              <Label>Analytics Cookies</Label>
              <Switch
                checked={preferences.analytics}
                onCheckedChange={(val) =>
                  setPreferences({ ...preferences, analytics: val })
                }
              />
            </div>
            <div className="flex items-center justify-between py-2">
              <Label>Marketing Cookies</Label>
              <Switch
                checked={preferences.marketing}
                onCheckedChange={(val) =>
                  setPreferences({ ...preferences, marketing: val })
                }
              />
            </div>
          </CardContent>
        </Card>
        <div className="mt-4 flex gap-3 justify-end">
          <Button
            onClick={() => savePreferences(preferences)}
            className="px-4 py-2 bg-primary text-white rounded-lg"
          >
            Save Preferences
          </Button>
          <Button
            onClick={() =>
              savePreferences({
                essential: true,
                analytics: true,
                marketing: true,
              })
            }
            className="px-4 py-2 bg-green-400 text-white rounded-lg"
          >
            Accept All
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
